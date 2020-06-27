import { EntityRepository, Repository } from 'typeorm';

import Category from '../models/Category';

@EntityRepository(Category)
class CategoriesRepository extends Repository<Category> {
  public async findOrCreateCategory(category: string): Promise<Category> {
    const findCategory = await this.findOne({
      where: { title: category },
    });

    if (findCategory) {
      return findCategory;
    }

    const newCategory = this.create({
      title: category,
    });

    await this.save(newCategory);

    return newCategory;
  }
}

export default CategoriesRepository;
