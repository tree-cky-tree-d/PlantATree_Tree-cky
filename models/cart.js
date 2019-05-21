class Cart{
    constructor() {
        this.trees = [];
        this.totalPrice = 0;
    }

    addItem(tree) {
        var index = this.checkItem(tree.id);

        if (index == -1) {
            this.trees.push(tree);
        } else {
            this.trees[index].quantity += tree.quantity;
        }

        this.calculateTotal();
        this.calculateItemTotal();
    }

    calculateTotal() {
        this.totalPrice = 0;

        this.trees.forEach(tree => {
            this.totalPrice += tree.price * tree.quantity;
        });
    }

    calculateItemTotal() {
        this.trees.forEach(tree => {
            tree.itemTotal = parseFloat(tree.price) * parseFloat(tree.quantity);
        })
    }

    checkItem(treeId) {
        for (var i = 0; i < this.trees.length; ++i) {
            if (this.trees[i].id == treeId) {
                return i;
            }
        }

        return -1;
    }

    removeItem(treeId) {
        var index = this.checkItem(treeId);

        console.log(Cart);
        console.log(treeId);
        console.log(index);

        this.trees.splice(index, 1);

        this.calculateTotal();
        this.calculateItemTotal();
    }
}

module.exports = new Cart();