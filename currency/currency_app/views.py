from django.shortcuts import render
from django.http import HttpResponse
from requests.exceptions import ConnectionError
import requests

sell_list = [1, 23, 3]
buy_list = [1, 2, 3]
currency_list = [
    'USD', 'AUD', 'CAD', 'EUR', 'HUF', 'CHF', 'GBP', 'JPY', 'CZK', 'DKK', 'NOK', 'SEK'
]
# requests.get('dasadassdas')
def update_price(sell_lst, buy_lst, currency_lst):
    try:
        x = requests.get("""http://api.nbp.pl/api/exchangerates/tables/c""")
    except ConnectionError:
        return sell_lst, buy_lst,currency_lst
    if x.status_code == 200:

        lst_1 = []
        lst_2 = []
        lst_3 = []
        for elem in x.json()[0]['rates']:
            if elem['code'] != 'XDR':
                lst_1.append(elem['bid'])
                lst_2.append(elem['ask'])
                lst_3.append(elem['code'])

        return lst_1, lst_2,lst_3

    else:
        return sell_lst, buy_lst,currency_lst



sell_list, buy_list, currency_list = update_price(sell_list, buy_list, currency_list)




def base(request):
    currency_lst_size = [elem for elem in range(len(currency_list))]
    zip_object = zip(currency_list, currency_lst_size)
    zip_object2 = zip(currency_list, currency_lst_size)
    test = currency_list
    return render(request, 'base.html', {
        'zip_object': zip_object,
        'zip_object2': zip_object2,
        'test': test,
        'sell_list': sell_list,
        'buy_list': buy_list
    })



