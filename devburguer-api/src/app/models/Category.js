import Sequelize, { Model } from 'sequelize';

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        path: Sequelize.STRING,
        urL: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3002/category-file/${this.path}`;
          },
        },

        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'categories',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
    );

    return this;
  }
}

export default Category;
