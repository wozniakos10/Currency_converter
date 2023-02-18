# Currency_converter 
Simple app to calculate currency exchange based on [NPB API](http://api.nbp.pl/). App enables calculate value of exchanging PLN to 12 other currencies 
including diferences at buy and sell prices. App is already hosted on google cloud service. You can check it out [here](https://django-currency-n2pv2pkrwq-lm.a.run.app/).

<br>

If you want to try it locally just type
```bash
docker run --rm -d -p {PORT}:8020 wozniakos10/django-currency
```
and then visit 127.0.0.1:PORT

<br>

You can also try:
```bash
git clone https://github.com/wozniakos10/Currency_converter.git
cd Currency_converter
pip install -r requirements.txt
cd currency
python manage.py runserver {PORT}
```
and then visit 127.0.0.1:PORT
