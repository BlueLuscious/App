from .models import StockModel

class StockServices:
    @staticmethod
    def substract_stock(stock: StockModel, quantity):
        stock.quantity -= quantity
        stock.save()