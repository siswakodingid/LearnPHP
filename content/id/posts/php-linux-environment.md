+++
title = "#1 PHP Linux Environment - Start Journey"
description = ""
tags = [
    "php"
]
date = "2021-01-22"
categories = [
    "PHP Dasar",
]
menu = "main"
+++

## A. Instalasi XAMPP Linux

- Download XAMPP : [XAMPP Linux](https://www.apachefriends.org/xampp-files/8.1.2/xampp-linux-x64-8.1.2-0-installer.run)  
- Buka Terminal  

```go 
> sudo chmod 777 xampp.run 
> sudo ./xampp.run 
```

### > Membuat Shortcut XAMPP

```bash
> cd /usr/share/applications 
> cd touch xampp.desktop
> sudo nano xampp.desktop
```

- Copy dan Paste Script di bawah ini.

```
[Desktop Entry]
Encoding=UTF-8
Name=XAMPP
Comment=XAMPP Linux Control Panel
Exec=sudo /opt/lampp/manager-linux-x64.run
Icon=/opt/lampp/htdocs/favicon.ico
Categories=Application
Type=Application
Terminal=true
```

### > Membuat Perizinan XAMPP

```bash 
> sudo chmod 775 /opt/lampp 
```

## B. Instalasi XAMPP Windows

- Download XAMPP : [XAMPP Windows](https://www.apachefriends.org/xampp-files/8.1.2/xampp-windows-x64-8.1.2-0-VS16-installer.exe)  
- Buka File Installer dengan cara klik 2x pada File
- Tekan Next, dan di saat pemilihan Komponen silakan centang ```Apache, MySQL, PHP ( Jika ada ), phpMyAdmin, Perl``` dan untuk pilihan lainnya biarkan seperti semula.  

![Screenshot Pemilihan Komponen XAMPP Windows, source by Niagahoster](https://www.niagahoster.co.id/blog/wp-content/uploads/2017/05/cara-instal-xampp-di-windows-7.png)

- Pada pemilihan Folder Instalasi, biarkan saja dan Klik "Next" sampai proses instalasi berjalan. 

![Screenshot Proses Instalasi XAMPP Windows, source by Niagahoster](https://www.niagahoster.co.id/blog/wp-content/uploads/2017/05/menginstal-xampp-e1494822633442.png) 

- Setelah selesai, bisa klik "Finish"

### > Cara Menjalankan XAMPP di Windows
- Buka Search pada Taskbar dan Cari XAMPP
- Setelah terbuka, klik ```Start``` pada Apache dan MySql
- Lalu cek apakah XAMPP berjalan atau tidak, dengan cara buka halaman [localhost](http://localhost) 
  
