const foo0 = Math.random() * 10;
const foo1 = Math.random() * 10;
const foo2 = Math.random() * 10;
const foo3 = Math.random() * 10;

const manipulate_data = {
    data_list_0: foo0,
    data_list_1: foo1,
    data_list_2: foo2,
    data_list_3: foo3,
    add_data: function(){
        const sum_of_data = this.data_list_0 + this.data_list_1 + this.data_list_2 + this.data_list_3;
        if(sum_of_data >= 20)
        {
            console.log(`woah, ${sum_of_data}\'s a pretty big number`);
        } else {
            console.log(`yikes, ${sum_of_data}\'s a pretty small number`);
        }
    }
}

manipulate_data.add_data();