from stock.models import StockModel
from client.models import ClientModel

class HomeServices:
    @staticmethod
    def get_context(seller, id):
        more_stock = StockModel.objects.all().exclude(type_work_line=seller.interest_line).exclude(seller=seller)
        stock_by_interest_line = StockModel.objects.filter(type_work_line=seller.interest_line).exclude(seller=seller)
        userdata = ClientModel.objects.get(id=id)
        return {
            "more_stock": more_stock,
            "stock_interest_line": stock_by_interest_line,
            "userdata": userdata,
        }