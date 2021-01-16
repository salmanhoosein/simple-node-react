const db = require("./connection");

module.exports = class Book {
  static generateBookingRef() {
    return Math.random().toString(36).substr(2, 6);
  }

  static selectAllFlightsByDeptAirport(deptApt) {
    return db.query(
      "SELECT * FROM cx8o24.flights WHERE departure_airport = $1",
      [deptApt]
    );
  }

  static selectFlightPriceByID(flight_id) {
    return db.query("SELECT price FROM cx8o24.flights WHERE flight_id = $1", [
      flight_id,
    ]);
  }
};
