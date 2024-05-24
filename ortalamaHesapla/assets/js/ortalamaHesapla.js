let sayiAdedi = Number(prompt("Kaç adet sayının ortalamasını bulmak istiyorsunuz?"));
let toplam = 0;
for (let i = 0; i < sayiAdedi; i++) {
  let sayi = Number(prompt((i + 1) + ". sayıyı giriniz:"));
  toplam += sayi;
}

let ortalama = (toplam / sayiAdedi)
alert("Ortalamanız: " + ortalama);

if( ortalama <= 20);

if(ortalama >= 60) {
  alert('Ortalamanın Üzerinde');
} else if(ortalama >=35) {
  alert('Ortalamada');
} else if (ortalama <=25) {
  alert('Ortalama altında')
} 
