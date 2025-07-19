class areas():
    def circle(self, a):
        print("Area of circle:", 3.124   *( a * a )  )

    def square(self, b):
        print("area of square:", b  * b)

    def rectangle(self, c , d):
        print("area of rectangle:",d * c)

    def (self, e , f):
        print("area of parallelogram", e * f)

# Take inputs
a = int(input("enter radius of circle:"))
b = int(input("Enter second number: "))

# Create object and call methods
O = areas
O.add(a, b)
O.sub(a, b)
O.mul(a, b)
O.div(a, b)
