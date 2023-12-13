const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Category extends Model{}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
   },
    'Household',
  },
  {
    name: 'Transportation',
  },
  {
    name: 'Entertainment',
  },
  {
    name: 'Eating out',
  },
  {
    name: 'Utilities',
  },
  {
    name: 'School',
  },
  {
    name: 'Misc.',
  },
];

const CATEGORY_ICON = {
  Household: '',
  Utilities: '',
  School: '',
  Transportation: '',
  Entertainment: '',
  Eating Out: '',
  Misc.: '',
};

db.once('open', async () => {
  try {
    await Promise.all(
      Array.from({ length: SEED_CATEGORY.length }, (_, i) =>
        Category.create({
          name: SEED_CATEGORY[i].name,
          icon: CATEGORY_ICON[SEED_CATEGORY[i].name],
        })
      )
    );
    console.log('Seed category data created!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
});
