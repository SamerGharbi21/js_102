class Vehicle {
    constructor(name, manufacturer, id) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.id = id;
    }
  }
  
  class Car extends Vehicle {
    constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id);
      this.type = type;
    }
  }
  
  class Airplane extends Vehicle {
    constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id);
      this.type = type;
    }
  }
  
  class Employee {
    constructor(name, id, dateOfBirth) {
      this.name = name;
      this.id = id;
      this.dateOfBirth = dateOfBirth;
    }
  }
  
  class Driver extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
      super(name, id, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  class Pilot extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
      super(name, id, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  class Reservation {
    constructor(reservationDate, employeeId, vehiclesId, reservationId) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehiclesId = vehiclesId;
      this.reservationId = reservationId;
    }
  }
  
  const car1 = new Car("Audi", "A7", 1, "Gas");
  const car2 = new Car("Toyota", "Corrola hyperd", 2, "Electric");
  const car3 = new Car("MG", "MG 6", 3, "Gas");
  
  const airplane1 = new Airplane("Airbus A380", "Airbus", 4, "Passenger");
  const airplane2 = new Airplane("Airbus A380", "Airbus", 5, "Supervaisor");
  
  const employees = [
    new Employee("Samer GHarbi", 1, new Date("2001-08-08")),
    new Employee("Saud Gharbi", 2, new Date("1997-09-09")),
    new Employee("Abdulaziz abo salamh", 3, new Date("2002-12-12")),
  ];
  
  const vehicles = [car1, car2, car3, airplane1, airplane2];
  
  const reservations = [];
  
  function reserve(employeeId, vehiclesId) {
    const employee = employees.find((employee) => employee.id === employeeId);
    const vehicle = vehicles.find((vehicle) => vehicle.id === vehiclesId);
  
    if (employeeId instanceof Pilot && vehicle instanceof Car) {
      console.log("The employee and the vehicle are not compatible.");
    } else {
      const reservation = new Reservation(
        new Date(),
        employeeId,
        vehiclesId,
      );
      reservations.push(reservation);
    }
  }
  
  reserve(1, 1);
  reserve(2, 2);
  reserve(3, 3);
  reserve(1, 4);
  reserve(2, 5);
  
  
  reservations.forEach((reservation) => {
    console.log(`Employee ID: ${reservation.employeeId}`);
    console.log(`Vehicle ID: ${reservation.vehiclesId}`);
    console.log(`Reservation Date: ${reservation.reservationDate}`);
    console.log("-----------------------------------");
  });
  