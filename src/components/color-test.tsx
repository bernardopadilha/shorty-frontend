export function ColorTest() {
  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-title">Teste das Cores Avocado</h2>
      
      {/* Testando cores avocado */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-title">Cores Avocado:</h3>
        <div className="grid grid-cols-5 gap-2">
          <div className="h-16 bg-avocado-50 rounded flex items-center justify-center text-xs">avocado-50</div>
          <div className="h-16 bg-avocado-100 rounded flex items-center justify-center text-xs">avocado-100</div>
          <div className="h-16 bg-avocado-200 rounded flex items-center justify-center text-xs">avocado-200</div>
          <div className="h-16 bg-avocado-300 rounded flex items-center justify-center text-xs">avocado-300</div>
          <div className="h-16 bg-avocado-400 rounded flex items-center justify-center text-xs">avocado-400</div>
          <div className="h-16 bg-avocado-500 rounded flex items-center justify-center text-xs text-white">avocado-500</div>
          <div className="h-16 bg-avocado-600 rounded flex items-center justify-center text-xs text-white">avocado-600</div>
          <div className="h-16 bg-avocado-700 rounded flex items-center justify-center text-xs text-white">avocado-700</div>
          <div className="h-16 bg-avocado-800 rounded flex items-center justify-center text-xs text-white">avocado-800</div>
          <div className="h-16 bg-avocado-900 rounded flex items-center justify-center text-xs text-white">avocado-900</div>
        </div>
      </div>

      {/* Testando cores lime (que agora são avocado) */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Cores Lime (agora avocado):</h3>
        <div className="grid grid-cols-5 gap-2">
          <div className="h-16 bg-lime-50 rounded flex items-center justify-center text-xs">lime-50</div>
          <div className="h-16 bg-lime-100 rounded flex items-center justify-center text-xs">lime-100</div>
          <div className="h-16 bg-lime-200 rounded flex items-center justify-center text-xs">lime-200</div>
          <div className="h-16 bg-lime-300 rounded flex items-center justify-center text-xs">lime-300</div>
          <div className="h-16 bg-lime-400 rounded flex items-center justify-center text-xs">lime-400</div>
          <div className="h-16 bg-lime-500 rounded flex items-center justify-center text-xs text-white">lime-500</div>
          <div className="h-16 bg-lime-600 rounded flex items-center justify-center text-xs text-white">lime-600</div>
          <div className="h-16 bg-lime-700 rounded flex items-center justify-center text-xs text-white">lime-700</div>
          <div className="h-16 bg-lime-800 rounded flex items-center justify-center text-xs text-white">lime-800</div>
          <div className="h-16 bg-lime-900 rounded flex items-center justify-center text-xs text-white">lime-900</div>
        </div>
      </div>

      {/* Testando diferentes variações */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Variações:</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-avocado-500 text-white rounded">
            <p className="font-semibold">Background</p>
            <p className="text-avocado-100">Texto claro</p>
          </div>
          <div className="p-4 border-2 border-avocado-500 rounded">
            <p className="font-semibold text-avocado-700">Border</p>
            <p className="text-avocado-600">Texto médio</p>
          </div>
          <div className="p-4 bg-avocado-100 rounded">
            <p className="font-semibold text-avocado-900">Light Background</p>
            <p className="text-avocado-700">Texto escuro</p>
          </div>
        </div>
      </div>
    </div>
  );
}
