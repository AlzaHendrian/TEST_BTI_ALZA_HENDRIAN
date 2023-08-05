const harga = [10, 7, 5, 8, 11, 9, 1]
let selisih = 0
let minElement = harga[0]

harga.map(item=>{
  const difference = item - minElement;

    if (difference > selisih) {
     selisih = difference;
    }

    if (item < minElement) {
      minElement = item;
    }
})

console.log(selisih)