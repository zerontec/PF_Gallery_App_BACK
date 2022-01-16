const { DataTypes } = require('sequelize');



module.exports= (sequelize) => {

sequelize.define('user', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },

      userName:{
          type: DataTypes.STRING,
          allowNull:false,
          defaultValue: '',
          unique:true
      },
      firtsName:{

        type:DataTypes.STRING,
        allowNull:false
      },
      lastName:{

        type:DataTypes.STRING,
        allowNull:false

      },

      address:{
          type:DataTypes.STRING
      },
      email:{

        type:DataTypes.STRING,
        unique:true,
       

      },
      password:{
          type:DataTypes.STRING
      },
      accountType:{

        type:DataTypes.STRING

      }




})

}