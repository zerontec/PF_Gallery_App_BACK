const { DataTypes } = require('sequelize');



module.exports= (sequelize) => {

sequelize.define('user', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },

      username:{
          type: DataTypes.STRING,
          allowNull:false,
          defaultValue: '',
          unique:true
      },
      firtsname:{

        type:DataTypes.STRING,
        allowNull:false
      },
      lastname:{

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
          type:DataTypes.STRING,
          allowNull: false
      },
      accountype:{

        type:DataTypes.STRING

      }

})

}