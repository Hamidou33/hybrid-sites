import {Injectable} from '@nestjs/common';

@Injectable()
export class ItemsService {
  private readonly items: any[] = [];

  findAll(): any[] {
    return this.items;
  }

  findOne(id: number): any {
    return this.items.find((item) => item.id === id);
  }

  create(item: any): any {
    this.items.push(item);
    return item;
  }

  update(id: number, updatedItem: any): any {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...updatedItem };
      return this.items[index];
    }
    return null;
  }

  delete(id: number): any {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      const deletedItem = this.items.splice(index, 1);
      return deletedItem[0];
    }
    return null;
  }
}
