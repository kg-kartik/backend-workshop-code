const mongoose = require("mongoose");
const schema = mongoose.Schema;

const TodoSchema = new schema({
    name:{                //Name of the todo
        type:String
    },
    by:{
        type:Date
    }
})

const Todos = mongoose.model("Todos",TodoSchema);
module.exports = Todos;