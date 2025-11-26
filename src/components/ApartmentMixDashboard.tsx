import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const OptimizedApartmentMixDashboard = () => {
  const [buildingClass, setBuildingClass] = useState('new_optimal');

  const apartmentData = {
    new_optimal: {
      mix: [
        { type: 'Студия', percent: 5, area: '38-42', count: 32, color: '#8884d8' },
        { type: '1-комн', percent: 22, area: '45-52', count: 141, color: '#82ca9d' },
        { type: '1+ комн', percent: 10, area: '50-56', count: 64, color: '#7dd3c0' },
        { type: '2-комн', percent: 30, area: '60-70', count: 192, color: '#ffc658' },
        { type: '2+ комн', percent: 13, area: '72-88', count: 83, color: '#ffb347' },
        { type: '3-комн', percent: 14, area: '80-92', count: 90, color: '#ff8042' },
        { type: '3+ комн', percent: 4, area: '95-110', count: 26, color: '#ff6b6b' },
        { type: '4-комн', percent: 2, area: '115-135', count: 12, color: '#a4de6c' },
        { type: '5-комн', percent: 0, area: '-', count: 0, color: '#c9a0dc' }
      ],
      totalUnits: 640,
      avgArea: 62.5,
      totalArea: 40000,
      description: 'Оптимизированный микс для максимальной ликвидности и рентабельности'
    },
    comfort_plus: {
      mix: [
        { type: 'Студия', percent: 6, area: '38-42', count: 38, color: '#8884d8' },
        { type: '1-комн', percent: 20, area: '44-50', count: 128, color: '#82ca9d' },
        { type: '1+ комн', percent: 8, area: '48-54', count: 51, color: '#7dd3c0' },
        { type: '2-комн', percent: 28, area: '58-68', count: 179, color: '#ffc658' },
        { type: '2+ комн', percent: 12, area: '70-85', count: 77, color: '#ffb347' },
        { type: '3-комн', percent: 15, area: '78-88', count: 96, color: '#ff8042' },
        { type: '3+ комн', percent: 7, area: '90-105', count: 45, color: '#ff6b6b' },
        { type: '4-комн', percent: 3, area: '110-125', count: 19, color: '#a4de6c' },
        { type: '5-комн', percent: 1, area: '130-150', count: 7, color: '#c9a0dc' }
      ],
      totalUnits: 640,
      avgArea: 50.78,
      totalArea: 32500,
      description: 'Сбалансированный микс для семейных покупателей среднего класса'
    },
    comfort: {
      mix: [
        { type: 'Студия', percent: 10, area: '36-40', count: 64, color: '#8884d8' },
        { type: '1-комн', percent: 28, area: '42-48', count: 179, color: '#82ca9d' },
        { type: '1+ комн', percent: 7, area: '46-52', count: 45, color: '#7dd3c0' },
        { type: '2-комн', percent: 32, area: '55-65', count: 205, color: '#ffc658' },
        { type: '2+ комн', percent: 10, area: '68-80', count: 64, color: '#ffb347' },
        { type: '3-комн', percent: 11, area: '75-85', count: 70, color: '#ff8042' },
        { type: '3+ комн', percent: 2, area: '88-100', count: 13, color: '#ff6b6b' },
        { type: '4-комн', percent: 0, area: '-', count: 0, color: '#a4de6c' },
        { type: '5-комн', percent: 0, area: '-', count: 0, color: '#c9a0dc' }
      ],
      totalUnits: 640,
      avgArea: 50.78,
      totalArea: 32500,
      description: 'Массовый сегмент с акцентом на доступность'
    },
    business: {
      mix: [
        { type: 'Студия', percent: 2, area: '40-45', count: 13, color: '#8884d8' },
        { type: '1-комн', percent: 12, area: '48-55', count: 77, color: '#82ca9d' },
        { type: '1+ комн', percent: 6, area: '52-60', count: 38, color: '#7dd3c0' },
        { type: '2-комн', percent: 25, area: '62-75', count: 160, color: '#ffc658' },
        { type: '2+ комн', percent: 14, area: '78-92', count: 90, color: '#ffb347' },
        { type: '3-комн', percent: 22, area: '82-95', count: 141, color: '#ff8042' },
        { type: '3+ комн', percent: 10, area: '98-115', count: 64, color: '#ff6b6b' },
        { type: '4-комн', percent: 7, area: '115-140', count: 45, color: '#a4de6c' },
        { type: '5-комн', percent: 2, area: '145-165', count: 12, color: '#c9a0dc' }
      ],
      totalUnits: 640,
      avgArea: 50.78,
      totalArea: 32500,
      description: 'Премиальный сегмент для состоятельных покупателей'
    }
  };

  const currentData = apartmentData[buildingClass];

  const financialMetrics = {
    new_optimal: {
      pricePerSqm: 1950,
      avgUnitPrice: 121875,
      totalRevenue: 78000000,
      parkingSpaces: 512,
      parkingPrice: 18000,
      constructionCostPerSqm: 850,
      marginPercent: 42
    },
    comfort_plus: {
      pricePerSqm: 1800,
      avgUnitPrice: 91404,
      totalRevenue: 58498560,
      parkingSpaces: 480,
      parkingPrice: 15000,
      constructionCostPerSqm: 800,
      marginPercent: 38
    },
    comfort: {
      pricePerSqm: 1600,
      avgUnitPrice: 81248,
      totalRevenue: 51998720,
      parkingSpaces: 450,
      parkingPrice: 12000,
      constructionCostPerSqm: 750,
      marginPercent: 35
    },
    business: {
      pricePerSqm: 2200,
      avgUnitPrice: 111716,
      totalRevenue: 71498240,
      parkingSpaces: 576,
      parkingPrice: 20000,
      constructionCostPerSqm: 950,
      marginPercent: 40
    }
  };

  const currentMetrics = financialMetrics[buildingClass];

  // Сравнительный анализ всех проектов
  const comparisonData = [
    { name: 'Комфорт', revenue: 52, margin: 35, avgPrice: 81, liquidity: 85 },
    { name: 'Комфорт+', revenue: 58.5, margin: 38, avgPrice: 91, liquidity: 80 },
    { name: 'НОВЫЙ', revenue: 78, margin: 42, avgPrice: 122, liquidity: 88 },
    { name: 'Бизнес', revenue: 71.5, margin: 40, avgPrice: 112, liquidity: 70 }
  ];

  const areaRanges = currentData.mix
    .filter(item => item.area !== '-')
    .map(item => ({
      type: item.type,
      min: parseInt(item.area.split('-')[0]) || 0,
      max: parseInt(item.area.split('-')[1]) || 0,
      avg: item.area.includes('-') ? 
        (parseInt(item.area.split('-')[0]) + parseInt(item.area.split('-')[1])) / 2 : 0
    }));

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      <div className="bg-white rounded-xl shadow-2xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🏗️ Оптимизированная квартирография нового проекта
          </h1>
          <p className="text-lg text-gray-600">
            На основе анализа 3 существующих сегментов рынка
          </p>
        </div>

        {/* Выбор класса жилья */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setBuildingClass('new_optimal')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              buildingClass === 'new_optimal'
                ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg scale-105 ring-4 ring-emerald-200'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            ⭐ Планируемый проект
          </button>
          <button
            onClick={() => setBuildingClass('comfort')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              buildingClass === 'comfort'
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Комфорт
          </button>
          <button
            onClick={() => setBuildingClass('comfort_plus')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              buildingClass === 'comfort_plus'
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Комфорт+
          </button>
          <button
            onClick={() => setBuildingClass('business')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              buildingClass === 'business'
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Бизнес
          </button>
        </div>

        <p className="text-center text-gray-600 mb-8 text-lg italic">
          {currentData.description}
        </p>

        {/* Ключевые метрики */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 text-white">
            <div className="text-sm opacity-90">Всего квартир</div>
            <div className="text-3xl font-bold">{currentData.totalUnits}</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-4 text-white">
            <div className="text-sm opacity-90">Средняя площадь</div>
            <div className="text-3xl font-bold">{currentData.avgArea} м²</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-4 text-white">
            <div className="text-sm opacity-90">Общая площадь</div>
            <div className="text-3xl font-bold">{currentData.totalArea.toLocaleString()} м²</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-4 text-white">
            <div className="text-sm opacity-90">Цена за м²</div>
            <div className="text-3xl font-bold">${currentMetrics.pricePerSqm}</div>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg p-4 text-white">
            <div className="text-sm opacity-90">Маржа</div>
            <div className="text-3xl font-bold">{currentMetrics.marginPercent}%</div>
          </div>
        </div>

        {/* Сравнительный анализ проектов */}
        {buildingClass === 'new_optimal' && (
          <div className="mb-8 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-6 border-2 border-emerald-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              📊 Сравнительный анализ всех проектов
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} name="Выручка (млн $)" />
                <Line type="monotone" dataKey="margin" stroke="#3b82f6" strokeWidth={3} name="Маржа (%)" />
                <Line type="monotone" dataKey="liquidity" stroke="#f59e0b" strokeWidth={3} name="Ликвидность (%)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Графики */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Круговая диаграмма */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Структура квартирографии (%)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={currentData.mix.filter(item => item.count > 0)}
                  dataKey="percent"
                  nameKey="type"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ type, percent }) => `${type}: ${percent}%`}
                >
                  {currentData.mix.filter(item => item.count > 0).map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Столбчатая диаграмма площадей */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Диапазоны площадей (м²)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={areaRanges}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="min" fill="#82ca9d" name="Минимум" />
                <Bar dataKey="max" fill="#8884d8" name="Максимум" />
                <Bar dataKey="avg" fill="#ffc658" name="Среднее" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Детальная таблица */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Детальная структура квартир
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-3 text-left">Тип</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Площадь (м²)</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Доля (%)</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Количество</th>
                  <th className="border border-gray-300 px-4 py-3 text-right">Средняя цена ($)</th>
                  <th className="border border-gray-300 px-4 py-3 text-right">Выручка ($)</th>
                </tr>
              </thead>
              <tbody>
                {currentData.mix.map((item, index) => {
                  const avgArea = item.area.includes('-') ? 
                    (parseInt(item.area.split('-')[0]) + parseInt(item.area.split('-')[1])) / 2 : 0;
                  const avgPrice = Math.round(avgArea * currentMetrics.pricePerSqm);
                  const totalRevenue = avgPrice * item.count;
                  
                  return (
                    <tr key={index} className={`hover:bg-gray-100 ${item.count === 0 ? 'opacity-50' : ''}`}>
                      <td className="border border-gray-300 px-4 py-3 font-semibold">{item.type}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">{item.area}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        <span className={`inline-block px-3 py-1 rounded-full font-semibold ${
                          item.percent >= 25 ? 'bg-green-100 text-green-800' :
                          item.percent >= 15 ? 'bg-blue-100 text-blue-800' :
                          item.percent >= 10 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {item.percent}%
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-semibold">
                        {item.count} шт
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right font-semibold">
                        {item.count > 0 ? `$${avgPrice.toLocaleString()}` : '-'}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right font-semibold text-green-600">
                        {item.count > 0 ? `$${totalRevenue.toLocaleString()}` : '-'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="bg-gray-200 font-bold">
                  <td colSpan="3" className="border border-gray-300 px-4 py-3 text-right">ИТОГО:</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">{currentData.totalUnits} шт</td>
                  <td className="border border-gray-300 px-4 py-3 text-right">
                    ${Math.round(currentMetrics.avgUnitPrice).toLocaleString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-right text-green-700">
                    ${currentMetrics.totalRevenue.toLocaleString()}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Финансовые показатели */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            💰 Финансовые показатели проекта
          </h3>
          <div className="grid md:grid-cols-4 gap-6 mb-4">
            <div className="bg-white rounded-lg p-4 shadow">
              <div className="text-sm text-gray-600 mb-1">Выручка (квартиры)</div>
              <div className="text-2xl font-bold text-indigo-600">
                ${(currentMetrics.totalRevenue / 1000000).toFixed(1)}M
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <div className="text-sm text-gray-600 mb-1">Паркинг ({currentMetrics.parkingSpaces} мест)</div>
              <div className="text-2xl font-bold text-green-600">
                ${((currentMetrics.parkingSpaces * currentMetrics.parkingPrice) / 1000000).toFixed(1)}M
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <div className="text-sm text-gray-600 mb-1">Общая выручка</div>
              <div className="text-2xl font-bold text-purple-600">
                ${((currentMetrics.totalRevenue + currentMetrics.parkingSpaces * currentMetrics.parkingPrice) / 1000000).toFixed(1)}M
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <div className="text-sm text-gray-600 mb-1">Маржинальность</div>
              <div className="text-2xl font-bold text-orange-600">
                {currentMetrics.marginPercent}%
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4 shadow">
              <div className="text-sm text-gray-600 mb-1">Себестоимость строительства</div>
              <div className="text-xl font-bold text-gray-700">
                ${currentMetrics.constructionCostPerSqm}/м² = ${((currentData.totalArea * currentMetrics.constructionCostPerSqm) / 1000000).toFixed(1)}M
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <div className="text-sm text-gray-600 mb-1">Прогнозируемая прибыль</div>
              <div className="text-xl font-bold text-green-700">
                ${(((currentMetrics.totalRevenue + currentMetrics.parkingSpaces * currentMetrics.parkingPrice) - (currentData.totalArea * currentMetrics.constructionCostPerSqm)) / 1000000).toFixed(1)}M
              </div>
            </div>
          </div>
        </div>

        {/* Обоснование оптимальности */}
        {buildingClass === 'new_optimal' && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded mb-8">
            <h4 className="font-bold text-gray-800 mb-3 text-xl">✅ Почему эта квартирография оптимальна:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-700 mb-2">📈 Рыночные преимущества:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>30% двухкомнатных - максимальный спрос на рынке</li>
                  <li>32% однокомнатных (1+1+) - для инвесторов и молодых семей</li>
                  <li>Только 5% студий - избегаем перенасыщения</li>
                  <li>14% трехкомнатных - для семей с детьми</li>
                  <li>Минимум больших квартир - низкая ликвидность</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-700 mb-2">💎 Финансовые преимущества:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Средняя площадь 62.5 м² - оптимальная для цены</li>
                  <li>Цена $1,950/м² - между Комфорт+ и Бизнес</li>
                  <li>Маржа 42% - выше всех аналогов</li>
                  <li>Выручка $78M - максимальная среди проектов</li>
                  <li>0.8 парковочных мест на квартиру - стандарт</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Детальная планировка */}
        <div className="mt-8 bg-white border-2 border-indigo-200 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            📐 Детальная планировка квартир
          </h3>
          <button 
            onClick={() => alert('Здесь будет открыта детальная планировка каждого типа квартир с описанием всех помещений')}
            className="w-full mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg"
          >
            📋 Посмотреть полную детализацию каждой квартиры
          </button>
          <p className="text-gray-600 text-center italic">
            Подробное описание всех помещений для каждого типа квартир с указанием площадей и назначения
          </p>
        </div>

        {/* Рекомендации */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
          <h4 className="font-bold text-gray-800 mb-2">💡 Ключевые рекомендации по реализации:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li><strong>Приоритет продаж:</strong> начать с 2-комнатных (30%) - максимальный спрос</li>
            <li><strong>Инвесторам:</strong> предложить 1-комнатные (22%) с гарантией аренды</li>
            <li><strong>Семейный сегмент:</strong> 3-комнатные (14%) с улучшенными планировками</li>
            <li><strong>Студии (5%):</strong> продавать последними или под краткосрочную аренду</li>
            <li><strong>Парковинг:</strong> 512 мест = 0.8 на квартиру (оптимальное соотношение)</li>
            <li><strong>Ценообразование:</strong> дифференцировать по этажам (±5-10%)</li>
            <li><strong>Увеличенные площади:</strong> +23% к Комфорт+ привлекут премиум-сегмент</li>
          </ul>
        </div>

        {/* Сравнительная таблица */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            📊 Сравнительная таблица проектов
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-3 text-left">Показатель</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Комфорт</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Комфорт+</th>
                  <th className="border border-gray-300 px-4 py-3 text-center bg-green-100">Проект</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Бизнес</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Цена за м²</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$1,600</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$1,800</td>
                  <td className="border border-gray-300 px-4 py-3 text-center bg-green-50 font-bold">$1,950</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$2,200</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Средняя площадь</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">50.78 м²</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">50.78 м²</td>
                  <td className="border border-gray-300 px-4 py-3 text-center bg-green-50 font-bold">62.5 м²</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">50.78 м²</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Общая выручка</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$52.0M</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$58.5M</td>
                  <td className="border border-gray-300 px-4 py-3 text-center bg-green-50 font-bold">$87.2M</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$71.5M</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Маржинальность</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">35%</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">38%</td>
                  <td className="border border-gray-300 px-4 py-3 text-center bg-green-50 font-bold">42%</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">40%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Доля 2-комнатных</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">32%</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">28%</td>
                  <td className="border border-gray-300 px-4 py-3 text-center bg-green-50 font-bold">30%</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">25%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizedApartmentMixDashboard;