# Project-Y  

[![Build Status](https://travis-ci.org/kpi-petitions/project-y.svg?branch=master)](https://travis-ci.org/kpi-petitions/project-y)

KPI Petitions project

## Development environment
(only on Linux)

  1. Install vagga (read instructions here http://vagga.readthedocs.org/en/latest/installation.html)
or just type 
```
# curl http://files.zerogw.com/vagga/vagga-install.sh | sh
```
  2.
```
 $ cd project-y
 $ vagga run
```

## Without vagga

  1. Requirements: Python 3, NPM, postgres headers library (libpq-dev on ubuntu), libjpeg
  2. 

```
 $ pip3 install virtualenv
 $ cd project-y
 $ virtualenv3 venv
 $ source venv/bin/activate
 $ pip install -r requirements.txt
 $ npm install
 $ gulp
```
.
.
.
.
.
.
