import * as React from 'react';
import { Accordion as AccordionPrimitive } from 'radix-ui';
import { MinusIcon, PlusIcon } from 'lucide-react';
import {
  motion,
  AnimatePresence,
  type Transition,
  type HTMLMotionProps,
} from 'motion/react';

import { cn } from '@/lib/utils';
import { Button } from './button';

type AccordionItemContextType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const AccordionItemContext = React.createContext<
  AccordionItemContextType | undefined
>(undefined);

const useAccordionItem = (): AccordionItemContextType => {
  const context = React.useContext(AccordionItemContext);
  if (!context) {
    throw new Error('useAccordionItem must be used within an AccordionItem');
  }
  return context;
};

type AccordionProps = React.ComponentProps<typeof AccordionPrimitive.Root>;

function Accordion(props: AccordionProps) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

type AccordionItemProps = React.ComponentProps<
  typeof AccordionPrimitive.Item
> & {
  children: React.ReactNode;
};

function AccordionItem({ className, children, ...props }: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <AccordionItemContext.Provider value={{ isOpen, setIsOpen }}>
      <AccordionPrimitive.Item
        data-slot="accordion-item"
        className={cn('border rounded-md px-5', className)}
        {...props}
      >
        {children}
      </AccordionPrimitive.Item>
    </AccordionItemContext.Provider>
  );
}

type AccordionTriggerProps = React.ComponentProps<
  typeof AccordionPrimitive.Trigger
> & {
  transition?: Transition;
  chevron?: boolean;
};

function AccordionTrigger({
  ref,
  className,
  children,
  transition = { type: 'spring', stiffness: 150, damping: 22 },
  chevron = true,
  ...props
}: AccordionTriggerProps) {
  const triggerRef = React.useRef<HTMLButtonElement | null>(null);
  React.useImperativeHandle(ref, () => triggerRef.current as HTMLButtonElement);
  const { isOpen, setIsOpen } = useAccordionItem();

  React.useEffect(() => {
    const node = triggerRef.current;
    if (!node) return;

    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.attributeName === 'data-state') {
          const currentState = node.getAttribute('data-state');
          setIsOpen(currentState === 'open');
        }
      });
    });
    observer.observe(node, {
      attributes: true,
      attributeFilter: ['data-state'],
    });
    const initialState = node.getAttribute('data-state');
    setIsOpen(initialState === 'open');
    return () => {
      observer.disconnect();
    };
  }, [setIsOpen]);

  return (
    <AccordionPrimitive.Header data-slot="accordion-header" className="flex">
      <AccordionPrimitive.Trigger
        ref={triggerRef}
        data-slot="accordion-trigger"
        className={cn(
          'flex flex-1 text-start text-title items-center justify-between py-4 font-medium',
          !isOpen ? 'cursor-pointer hover:underline' : 'cursor-auto',
          className,
        )}
        {...props}
      >
        {children}

        {isOpen ? (
          <Button variant={'cartoon'} className='size-8'>
            <motion.div
              data-slot="accordion-trigger-chevron"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={transition}
            >
              <MinusIcon className="size-5 text-primary-foreground" />
            </motion.div>
          </Button>
        ) : (
          <Button variant={'cartoon'} className='size-8'>
          <motion.div
            data-slot="accordion-trigger-chevron"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={transition}
          >
            <PlusIcon className="size-5 text-primary-foreground" />
          </motion.div>
          </Button>
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

type AccordionContentProps = React.ComponentProps<
  typeof AccordionPrimitive.Content
> &
  HTMLMotionProps<'div'> & {
    transition?: Transition;
  };

function AccordionContent({
  className,
  children,
  transition = { type: 'spring', stiffness: 150, damping: 22 },
  ...props
}: AccordionContentProps) {
  const { isOpen } = useAccordionItem();

  return (
    <AnimatePresence>
      {isOpen && (
        <AccordionPrimitive.Content forceMount {...props}>
          <motion.div
            key="accordion-content"
            data-slot="accordion-content"
            initial={{ height: 0, opacity: 0, '--mask-stop': '0%' }}
            animate={{ height: 'auto', opacity: 1, '--mask-stop': '100%' }}
            exit={{ height: 0, opacity: 0, '--mask-stop': '0%' }}
            transition={transition}
            style={{
              maskImage:
                'linear-gradient(black var(--mask-stop), transparent var(--mask-stop))',
              WebkitMaskImage:
                'linear-gradient(black var(--mask-stop), transparent var(--mask-stop))',
            }}
            className="overflow-hidden text-subtitle"
            {...props}
          >
            <div className={cn('pb-4 pt-0 text-sm', className)}>{children}</div>
          </motion.div>
        </AccordionPrimitive.Content>
      )}
    </AnimatePresence>
  );
}

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  useAccordionItem,
  type AccordionItemContextType,
  type AccordionProps,
  type AccordionItemProps,
  type AccordionTriggerProps,
  type AccordionContentProps,
};
