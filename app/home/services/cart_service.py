#from django.db.models import Sum, F
from home.models.cart_model import CartModel
from client.models import ClientModel

class CartServices:
    @staticmethod
    def get_context(buyer, id):
        cart_buyer = CartModel.objects.filter(buyer=buyer)
        userdata = ClientModel.objects.get(id=id)
        return {
            "userdata": userdata,
            "cart_data": cart_buyer,
            #"total_price": cart_buyer.aggregate(sum=Sum(F('product.price')*F('quantity')))["sum"]
        }