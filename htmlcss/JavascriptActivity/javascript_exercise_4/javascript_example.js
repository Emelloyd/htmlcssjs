    function SequencebySeven(num) {
      let remainder = num % 7;
      if (remainder === 0) {
        return num;
      }
      return num + (7 - remainder);
    }

    function onHandlerSequenceSeven() {
      const num = parseInt(document.getElementById('divisible7').value);
      document.querySelector('.result').innerHTML = SequencebySeven(num);
    }

    let numbers = [1, 1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 6, 6, 7, 7, 7, 8, 9, 9, 9];
    function CountbyNumber(array, number) {
      let count = 0;
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === numbers[i + number]) {
          count++;
          i++;
        }
      }
      return count;
    }

    document.querySelector('.countby2nd').innerHTML = 'Counter by 2: ' + CountbyNumber(numbers, 1);
    document.querySelector('.countby3rd').innerHTML = 'Counter by 3: ' + CountbyNumber(numbers, 2);