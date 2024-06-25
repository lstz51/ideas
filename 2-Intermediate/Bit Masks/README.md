### Plan

1. **Define the Cities and Their Timezones**:
   - Create an array of city objects, each with a name and GMT offset.
   - Map these cities to a binary representation of GMT offsets.

2. **Create the UI**:
   - A vertical list of checkboxes for each city.
   - An input box to enter the GMT offset.
   - A button to trigger the search.
   - An output area to display the results.

3. **Handle User Interactions**:
   - Event listener for the search button to read the input GMT offset.
   - Perform a bitwise operation to find cities matching the input offset.
   - Display the results in the output area.

4. **Implement Bitwise Logic**:
   - Convert the GMT offset to the corresponding bit position.
   - Use bitwise AND operations to find matching cities.
   
5. **Bonus Features**:
   - Option to search for cities not in the specified GMT offset.
   - Display the count of matching cities.

### Pseudocode

1. **Define Constants**:
   - Array of city objects with `name` and `gmtOffset`.

2. **Bitwise Functions**:
   - `getBitPosition(gmtOffset)`: Convert GMT offset to bit position.
   - `createBitMask(gmtOffset)`: Create a bitmask for a given GMT offset.

3. **UI Setup**:
   - HTML structure for the list of checkboxes, input box, button, and output area.

4. **Event Handling**:
   - `handleSearch()`: Function to handle the search button click.
     - Read the input GMT offset.
     - Convert it to a bitmask.
     - Filter cities using bitwise AND.
     - Display matching cities and count.

### Implementation

Let's implement this in HTML and JavaScript.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bit Masks App</title>
    <style>
        .city-list { margin-bottom: 20px; }
        .result { margin-top: 20px; }
    </style>
</head>
<body>
    <h1>Bit Masks App</h1>
    <div class="city-list">
        <label><input type="checkbox" value="+3" id="Moscow"> Moscow: GMT +3</label><br>
        <label><input type="checkbox" value="+2" id="Paris"> Paris: GMT +2</label><br>
        <label><input type="checkbox" value="+2" id="Berlin"> Berlin: GMT +2</label><br>
        <label><input type="checkbox" value="+2" id="Brussels"> Brussels: GMT +2</label><br>
        <label><input type="checkbox" value="+2" id="Amsterdam"> Amsterdam: GMT +2</label><br>
        <label><input type="checkbox" value="+2" id="Rome"> Rome: GMT +2</label><br>
        <label><input type="checkbox" value="+1" id="London"> London: GMT +1</label><br>
        <label><input type="checkbox" value="+1" id="Dublin"> Dublin: GMT +1</label><br>
        <label><input type="checkbox" value="-4" id="NewYork"> New York: GMT -4</label><br>
        <label><input type="checkbox" value="-4" id="Washington"> Washington, DC: GMT -4</label><br>
        <label><input type="checkbox" value="-5" id="StLouis"> St. Louis: GMT -5</label><br>
        <label><input type="checkbox" value="-7" id="LosAngeles"> Los Angeles: GMT -7</label><br>
        <label><input type="checkbox" value="+9" id="Tokyo"> Tokyo: GMT +9</label><br>
        <label><input type="checkbox" value="+8" id="Beijing"> Beijing: GMT +8</label><br>
        <label><input type="checkbox" value="+7" id="HoChiMinh"> Ho Chi Minh City: GMT +7</label><br>
        <label><input type="checkbox" value="+5" id="Mumbai"> Mumbai: GMT +5</label><br>
    </div>
    <input type="text" id="gmtOffset" placeholder="Enter GMT offset (e.g., +2, -4)">
    <button id="findCities">Find Cities</button>
    <div class="result" id="result"></div>

    <script>
        const cities = [
            { name: 'Moscow', gmtOffset: 3 },
            { name: 'Paris', gmtOffset: 2 },
            { name: 'Berlin', gmtOffset: 2 },
            { name: 'Brussels', gmtOffset: 2 },
            { name: 'Amsterdam', gmtOffset: 2 },
            { name: 'Rome', gmtOffset: 2 },
            { name: 'London', gmtOffset: 1 },
            { name: 'Dublin', gmtOffset: 1 },
            { name: 'New York', gmtOffset: -4 },
            { name: 'Washington, DC', gmtOffset: -4 },
            { name: 'St. Louis', gmtOffset: -5 },
            { name: 'Los Angeles', gmtOffset: -7 },
            { name: 'Tokyo', gmtOffset: 9 },
            { name: 'Beijing', gmtOffset: 8 },
            { name: 'Ho Chi Minh City', gmtOffset: 7 },
            { name: 'Mumbai', gmtOffset: 5 },
        ];

        function getBitPosition(gmtOffset) {
            return gmtOffset + 12;
        }

        function createBitMask(gmtOffset) {
            return 1 << getBitPosition(gmtOffset);
        }

        function handleSearch() {
            const input = document.getElementById('gmtOffset').value;
            const gmtOffset = parseInt(input);
            const bitMask = createBitMask(gmtOffset);
            const result = document.getElementById('result');
            result.innerHTML = '';

            const matchingCities = cities.filter(city => (createBitMask(city.gmtOffset) & bitMask) !== 0);
            if (matchingCities.length > 0) {
                result.innerHTML = `Matching Cities (${matchingCities.length}): <br>${matchingCities.map(city => city.name).join('<br>')}`;
            } else {
                result.innerHTML = 'No matching cities found.';
            }
        }

        document.getElementById('findCities').addEventListener('click', handleSearch);
    </script>
</body>
</html>
```