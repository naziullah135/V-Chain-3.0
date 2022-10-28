pragma solidity ^0.8.0;

contract VehicleChain {

    struct BRTA {
        string gmail;
        string password;
    }

    struct VehicleOwner {
        string name;
        string nid;
        string presentResidency;
        string email;
        int created_at;
    }

    struct Vehicle {
        address vehicleOwner;
        string model;
        string brand;
        string carType;
        string bodyType;
        string engine;
        string fuel;
        uint mileage;
        string drive;
        string transmission;
        string color;
        uint seats;
        string registrationNumber;
        uint price;
        int created_at;
        int updated_at;
    }



    address owner;

    mapping(address => VehicleOwner) vehicleOwners;
    mapping(string => Vehicle) vehicles;
    mapping(address => bool) isVehicleOwnerExists;
    mapping(string => bool) isVehicleIdExists;

    event vehicleCreated(string id, string model, string brand, string registrationNumber, int createdAt);
    event vehicleUpdated(string id, string model, string brand, string registrationNumber, int updated_at);

    function createVehicleOwner(
        string memory name,
        string memory nid,
        string memory presentResidency,
        string memory email,
        int created_at
    ) public payable {
        require(bytes(name).length > 0, "Name is required");
        require(bytes(nid).length > 0, "Nid is required");
        require(bytes(presentResidency).length > 0, "Present residency is required");
        require(bytes(email).length > 0, "Email is required");
        require(created_at > 0, "CreatedAt is invalid");
        require(isVehicleOwnerExists[msg.sender] == false, "Vehicle Owner already registered");

        isVehicleOwnerExists[msg.sender] = true;
        vehicleOwners[msg.sender] = VehicleOwner(name, nid, presentResidency, email, created_at);
    }

    function getVehicleOwnerProfile() public view returns (
        string memory name,
        string memory nid,
        string memory presentResidency,
        string memory email,
        int created_at
    ) {
        require(isVehicleOwnerExists[msg.sender] == true, "Vehicle Owner is not registered");

        VehicleOwner memory vehicleOwner = vehicleOwners[msg.sender];
        name = vehicleOwner.name;
        nid = vehicleOwner.nid;
        presentResidency = vehicleOwner.presentResidency;
        email = vehicleOwner.email;
        created_at = vehicleOwner.created_at;
    }

    function updateVehicleOwner(
        string memory name,
        string memory nid,
        string memory presentResidency,
        string memory email
    ) public payable {
        require(bytes(name).length > 0, "Name is required");
        require(bytes(nid).length > 0, "Nid is required");
        require(bytes(presentResidency).length > 0, "Present residency is required");
        require(bytes(email).length > 0, "Email is required");
        require(isVehicleOwnerExists[msg.sender] == true, "User isn't registered");

        vehicleOwners[msg.sender].name = name;
        vehicleOwners[msg.sender].nid = nid;
        vehicleOwners[msg.sender].presentResidency = presentResidency;
        vehicleOwners[msg.sender].email = email;
    }

    function isVehicleOwnerRegistered() public view returns (bool){
        return isVehicleOwnerExists[msg.sender];
    }

    function isOwner() public view returns (bool){
        return msg.sender == owner;
    }

    function registerVehicle(
        string memory model,
        string memory brand,
        string memory carType,
        string memory bodyType,
        string memory engine,
        string memory fuel,
        uint mileage,
        string memory drive,
        string memory transmission,
        string memory color,
        uint seats,
        string memory registrationNumber,
        uint price,
        int created_at
    ) public payable {
        require(isVehicleOwnerExists[msg.sender] == true, "Vehicle owner not registered");
        require(isVehicleIdExists[id] == false, "Vehicle already exists");
        require(bytes(model).length > 0, "Model is required");
        require(bytes(brand).length > 0, "Brand is required");
        require(bytes(carType).length > 0, "Car type is required");
        require(bytes(bodyType).length > 0, "Body type is required");
        require(bytes(engine).length > 0, "Engine is required");
        require(bytes(fuel).length > 0, "Fuel is required");
        require(mileage > 0, "Mileage is invalid");
        require(bytes(drive).length > 0, "Drive is required");
        require(bytes(transmission).length > 0, "Transmission is required");
        require(bytes(color).length > 0, "Color is required");
        require(seats > 0, "Seat number is required");
        require(bytes(registrationNumber).length > 0, "Registration number is required");
        require(price > 0, "Price is required");
        require(created_at > 0, "CreatedAt is invalid");

        isVehicleIdExists[id] = true;
        vehicles[id] = Vehicle(msg.sender, model,  brand, carType, bodyType, engine, fuel, mileage,
            drive, transmission, color, seats, registrationNumber, price, created_at, 0);

        emit vehicleCreated(id, model, brand, registrationNumber, created_at);
    }

    function getVehicle(string memory id) public view returns (
        string memory model,
        string memory brand,
        string memory carType,
        string memory bodyType,
        string memory engine,
        string memory fuel,
        uint mileage,
        string memory drive,
        string memory transmission,
        string memory color,
        uint seats,
        string memory registrationNumber,
        uint price,
        int created_at,
        int updated_at
    ) {
        require(isVehicleIdExists[id] == true, "Vehicle doesn't exists");

        Vehicle memory vehicle = vehicles[id];
        model = vehicle.model;
        brand = vehicle.brand;
        carType = vehicle.carType;
        bodyType = vehicle.bodyType;
        engine = vehicle.engine;
        fuel = vehicle.fuel;
        mileage = vehicle.mileage;
        drive = vehicle.drive;
        transmission = vehicle.transmission;
        color = vehicle.color;
        seats = vehicle.seats;
        registrationNumber = vehicle.registrationNumber;
        price = vehicle.price;
        created_at = vehicle.created_at;
        updated_at = vehicle.updated_at;
    }

    function updateVehicle(
        string memory model,
        string memory brand,
        string memory carType,
        string memory bodyType,
        string memory engine,
        string memory fuel,
        uint mileage,
        string memory drive,
        string memory transmission,
        string memory color,
        uint seats,
        string memory registrationNumber,
        uint price,
        int created_at,
        int updated_at
    ) public payable {
        require(isVehicleOwnerExists[msg.sender] == true, "Vehicle owner not registered");
        require(isVehicleIdExists[id] == false, "Vehicle already exists");
        require(bytes(model).length > 0, "Model is required");
        require(bytes(brand).length > 0, "Brand is required");
        require(bytes(carType).length > 0, "Car type is required");
        require(bytes(bodyType).length > 0, "Body type is required");
        require(bytes(engine).length > 0, "Engine is required");
        require(bytes(fuel).length > 0, "Fuel is required");
        require(mileage > 0, "Mileage is invalid");
        require(bytes(drive).length > 0, "Drive is required");
        require(bytes(transmission).length > 0, "Transmission is required");
        require(bytes(color).length > 0, "Color is required");
        require(seats > 0, "Seat number is required");
        require(bytes(registrationNumber).length > 0, "Registration number is required");
        require(price > 0, "Price is required");
        require(updated_at > 0, "UpdatedAt is invalid");
        require(vehicles[id].vehicleOwner == msg.sender, "You are not authorized to update the vehicle information");

        vehicles[id].model = model;
        vehicles[id].brand = brand;
        vehicles[id].carType = carType;
        vehicles[id].bodyType = bodyType;
        vehicles[id].engine = engine;
        vehicles[id].fuel = fuel;
        vehicles[id].mileage = mileage;
        vehicles[id].drive = drive;
        vehicles[id].transmission = transmission;
        vehicles[id].color = color;
        vehicles[id].seats = seats;
        vehicles[id].registrationNumber = registrationNumber;
        vehicles[id].price = price;
        vehicles[id].updated_at = updated_at;

        emit vehicleUpdated(id, model, brand, registrationNumber, updated_at);
    }

    function transfer(address newOwner) public payable {
        require(owner == msg.sender);
        owner = newOwner;
    }


}