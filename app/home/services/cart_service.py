from stock.models import StockModel
from client.models import ClientModel

class CartServices:
    @staticmethod
    def get_context(id):
        userdata = ClientModel.objects.get(id=id)
        return {
            "userdata": userdata,
        }