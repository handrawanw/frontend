### cara install react js

langkah - langkah install
1. install node js terlebih dahulu jika belum install bisa download disini
  https://nodejs.org/en/ 
  setelah selesai install nodejs, buka CMD / DOS / Terminal, ketik
  npm -v jika terlihat versi node.jsnya berarti sukses install
2.Install create-react-app
tentukan lokasi install react, misalkan kalau di windows D:/belajar-react/ (buat folder tersebut kalau belum ada)
ketik di CMD/DOS
d:
cd belajar-react
jika posisi sudah di folder tersebut, ketikkan perintah

npm install -g create-react-app
untuk cek sukses / tidak, ketikan perintah:

create-react-app --version

create react app untuk install react dari pertama kali buat,
karena sudah terbuat komponen-2 nya
maka langsung saja ka buka folder reactjs nya
cd vicecarefrontend
npm install
maka npm install akan install module yang tercatat di package.json
jika ada notif npm audit fix , ketik npm audit fix agar module node_modules nya aman

jika sudah terinstall semua module di package.json nya
  maka jalankan dengan 
  npm start
