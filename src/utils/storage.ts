type StorageKey = 'favoriteProducts' | 'userPreferences' | 'cartItems';

interface StorageService {
  get<T>(key: StorageKey, defaultValue: T): T;
  set<T>(key: StorageKey, value: T): void;
  remove(key: StorageKey): void;
  clear(): void;
}

class MemoryStorage implements StorageService {
  private storage: Record<string, string> = {};

  get<T>(key: StorageKey, defaultValue: T): T {
    try {
      const item = this.storage[key];
      if (item === undefined) return defaultValue;
      return JSON.parse(item);
    } catch (error) {
      console.error(`Failed to get item "${key}" from storage:`, error);
      return defaultValue;
    }
  }

  set<T>(key: StorageKey, value: T): void {
    try {
      this.storage[key] = JSON.stringify(value);
    } catch (error) {
      console.error(`Failed to set item "${key}" in storage:`, error);
    }
  }

  remove(key: StorageKey): void {
    delete this.storage[key];
  }

  clear(): void {
    this.storage = {};
  }
}

// Create singleton instance
const storageService = new MemoryStorage();

export const getFavorites = (): number[] => {
  return storageService.get('favoriteProducts', []);
};

export const saveFavorites = (favorites: number[]): void => {
  storageService.set('favoriteProducts', favorites);
};

export const clearFavorites = (): void => {
  storageService.remove('favoriteProducts');
};


export const getStorageItem = <T>(key: StorageKey, defaultValue: T): T => {
  return storageService.get(key, defaultValue);
};

export const setStorageItem = <T>(key: StorageKey, value: T): void => {
  storageService.set(key, value);
};

export { storageService };