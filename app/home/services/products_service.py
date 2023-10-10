from stock.models import StockModel
from client.models import ClientModel

class ProductServices:
    @staticmethod
    def get_context(seller, id):
        all_stock = StockModel.objects.all().exclude(seller=seller.id)
        userdata = ClientModel.objects.get(id=id)        
        return {
            "all_stock": all_stock,
            "userdata": userdata,
        }