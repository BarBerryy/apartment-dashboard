import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ApartmentMixDashboard = () => {
  const [buildingClass, setBuildingClass] = useState('comfort_plus');

  const apartmentData = {
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
    comfort_plus: {
      pricePerSqm: 1800,
      avgUnitPrice: 119700,
      totalRevenue: 23940000,
      parkingSpaces: 150,
      parkingPrice: 15000
    },
    comfort: {
      pricePerSqm: 1600,
      avgUnitPrice: 93120,
      totalRevenue: 18624000,
      parkingSpaces: 120,
      parkingPrice: 12000
    },
    business: {
      pricePerSqm: 2200,
      avgUnitPrice: 172480,
      totalRevenue: 34496000,
      parkingSpaces: 180,
      parkingPrice: 20000
    }
  };

  const currentMetrics = financialMetrics[buildingClass];

  const areaRanges = currentData.mix.map(item => ({
    type: item.type,
    min: parseInt(item.area.split('-')[0]) || 0,
    max: parseInt(item.area.split('-')[1]) || 0,
    avg: item.area.includes('-') ? 
      (parseInt(item.area.split('-')[0]) + parseInt(item.area.split('-')[1])) / 2 : 0
  }));

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Оптимальное соотношение типов квартир
        </h1>

        {/* Выбор класса жилья */}
        <div className="mb-8 flex justify-center gap-4">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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
        </div>

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
                  data={currentData.mix}
                  dataKey="percent"
                  nameKey="type"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ type, percent }) => `${type}: ${percent}%`}
                >
                  {currentData.mix.map((entry, index) => (
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
                </tr>
              </thead>
              <tbody>
                {currentData.mix.map((item, index) => {
                  const avgArea = item.area.includes('-') ? 
                    (parseInt(item.area.split('-')[0]) + parseInt(item.area.split('-')[1])) / 2 : 0;
                  const avgPrice = Math.round(avgArea * currentMetrics.pricePerSqm);
                  
                  return (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">{item.type}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">{item.area}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                          {item.percent}%
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-semibold">
                        {item.count} шт
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right font-semibold">
                        ${avgPrice.toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Финансовые показатели */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Финансовые показатели проекта
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 shadow">
              <div className="text-sm text-gray-600 mb-1">Общая выручка (квартиры)</div>
              <div className="text-2xl font-bold text-indigo-600">
                ${(currentMetrics.totalRevenue / 1000).toFixed(1)}M
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <div className="text-sm text-gray-600 mb-1">Паркинг ({currentMetrics.parkingSpaces} мест)</div>
              <div className="text-2xl font-bold text-green-600">
                ${((currentMetrics.parkingSpaces * currentMetrics.parkingPrice) / 1000).toFixed(1)}K
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <div className="text-sm text-gray-600 mb-1">Итого проект</div>
              <div className="text-2xl font-bold text-purple-600">
                ${((currentMetrics.totalRevenue + currentMetrics.parkingSpaces * currentMetrics.parkingPrice) / 1000000).toFixed(2)}M
              </div>
            </div>
          </div>
        </div>

        {/* Детальная планировка */}
        <div className="mt-8 bg-white border-2 border-indigo-200 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            📐 Детальная планировка квартир
          </h3>
          <button 
            onClick={() => window.open('#', '_self')}
            className="w-full mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg"
          >
            📋 Посмотреть полную детализацию каждой квартиры
          </button>
          <p className="text-gray-600 text-center italic">
            Нажмите кнопку выше, чтобы увидеть подробное описание каждого помещения для всех типов квартир
          </p>
        </div>

        {/* Рекомендации */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
          <h4 className="font-bold text-gray-800 mb-2">💡 Ключевые рекомендации:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Максимальная доля 2-комнатных квартир обеспечивает высокий спрос</li>
            <li>1-комнатные квартиры - ликвидный актив для инвесторов</li>
            <li>3-4 комнатные квартиры привлекают семейных покупателей</li>
            <li>Студии популярны среди молодежи и для сдачи в аренду</li>
            <li>Соотношение парковочных мест: 0.75-0.90 на квартиру</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ApartmentMixDashboard;