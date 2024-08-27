const { calculateAverageTemperature } = require('../weatherController');

test('should calculate average temperature correctly', () => {
    const data = [
        { temp: { day: 20 } },
        { temp: { day: 22 } },
        { temp: { day: 24 } },
    ];
    const average = calculateAverageTemperature(data);
    expect(average).toBeCloseTo(22);  // toBeCloseTo for floating point comparisons
});