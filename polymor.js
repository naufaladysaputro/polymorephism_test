// Class Laptop
class Laptop {
    constructor(brand, type) {
      this.brand = brand;
      this.type = type;
    }
  
    // Method run: Mengembalikan status laptop menyala
    run() {
      return `${this.brand} ${this.type} is on!`;
    }
  }
  
  // Helper for gaming capability
  const gamingCapability = {
    gaming() {
      return "Playing Apex Legend at 120fps!";
    }
  };
  
  // Helper for editing capability
  const editingCapability = {
    editing() {
      return "Edit and Render 8k projects!";
    }
  };
  
  // Class LaptopGaming extends Laptop
  class LaptopGaming extends Laptop {          
    run() {
      return `${super.run()}\n${gamingCapability.gaming()}`;    //super.run() digunakan untuk memanggil metode run dari kelas induk (Laptop).
    }
  }
  
  // Class LaptopEditing extends Laptop
  class LaptopEditing extends Laptop {
    run() {
      return `${super.run()}\n${editingCapability.editing()}`;
    }
  }
  
  // Class LaptopHybrid extends Laptop
  class LaptopHybrid extends Laptop {
    run() {
      return `${super.run()}\n${gamingCapability.gaming()}\n${editingCapability.editing()}`;
    }
  }
  
  // Polymorphism Example
  function showLaptopStatus(laptop) {
    console.log(laptop.run());
    console.log('')
  }
  
  // Contoh penggunaan
  const laptopGaming = new LaptopGaming("Asus", "ROG Strix");
  const laptopEditing = new LaptopEditing("Apple", "MacBook Pro");
  const laptopHybrid = new LaptopHybrid("MSI", "Prestige 14");
  
  // Polymorphism in action: Same method called, different output based on object type
  showLaptopStatus(laptopGaming);
  showLaptopStatus(laptopEditing);
  showLaptopStatus(laptopHybrid);
  