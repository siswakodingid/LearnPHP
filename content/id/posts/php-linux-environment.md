+++
title = "#1 PHP Linux Environment - Start Journey"
description = ""
tags = [
    "php"
]
date = "2021-01-22"
categories = [
    "PHP",
]
menu = "main"
+++

## Instalasi XAMPP Linux

- Download XAMPP : [XAMPP Linux](https://www.apachefriends.org/download.html)  
- Buka Terminal  

```go 
> sudo chmod 777 xampp.run 
> sudo ./xampp.run 
```

### Membuat Shortcut XAMPP

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

### Perizinan XAMPP

```bash 
> sudo chmod 775 /opt/lampp 
```
