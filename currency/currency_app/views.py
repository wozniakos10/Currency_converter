from django.shortcuts import render
from requests.exceptions import ConnectionError
import requests



def update_price():

    try:
        x = requests.get("""http://api.nbp.pl/api/exchangerates/tables/c""")
    except ConnectionError:
        # Initialize data
        return [4.4249, 3.0386, 3.2937, 4.7209, 0.012424, 4.7824, 5.3062, 0.032986, 0.1997, 0.6335, 0.4318, 0.4231], [
            4.5143, 3.1, 3.3603, 4.8163, 0.012674, 4.879, 5.4134, 0.033652, 0.2037, 0.6463, 0.4406, 0.4317], [
            'USD', 'AUD', 'CAD', 'EUR', 'HUF', 'CHF', 'GBP', 'JPY', 'CZK', 'DKK', 'NOK', 'SEK'], "2023-02-16"
    if x.status_code == 200:
        print(x.json()[0]['effectiveDate'])

        lst_1 = []
        lst_2 = []
        lst_3 = []
        for elem in x.json()[0]['rates']:
            if elem['code'] != 'XDR':
                lst_1.append(elem['bid'])
                lst_2.append(elem['ask'])
                lst_3.append(elem['code'])

        return lst_1, lst_2, lst_3, x.json()[0]['effectiveDate']

    else:
        return [4.4249, 3.0386, 3.2937, 4.7209, 0.012424, 4.7824, 5.3062, 0.032986, 0.1997, 0.6335, 0.4318, 0.4231], [4.5143, 3.1, 3.3603, 4.8163, 0.012674, 4.879, 5.4134, 0.033652, 0.2037, 0.6463, 0.4406, 0.4317],[
    'USD', 'AUD', 'CAD', 'EUR', 'HUF', 'CHF', 'GBP', 'JPY', 'CZK', 'DKK', 'NOK', 'SEK'], "2023-02-16"





def base(request):
    #Better choice would be asyncio and make schedule for execute this function and for example
    #save json data local and then read it.
    sell_list, buy_list, currency_list, effective_date = update_price()

    # Object needed to initialize select in html
    currency_lst_size = [elem for elem in range(len(currency_list))]
    zip_object = zip(currency_list, currency_lst_size)
    zip_object2 = zip(currency_list, currency_lst_size)

    pln_to_usd = round(1/buy_list[0],4)
    return render(request, 'base.html', {
        'zip_object': zip_object,
        'zip_object2': zip_object2,
        'sell_list': sell_list,
        'buy_list': buy_list,
        'pln_to_usd': pln_to_usd,
        'effective_date': effective_date
    })



