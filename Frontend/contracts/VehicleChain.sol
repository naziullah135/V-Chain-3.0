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
        string vehicleOwner;
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

    // MSP stands for Membership Service Provider
    struct MSP {
        address mspName;
        string location;
        string email;
        string password;
        string token;
        int created_at;
        int updated_at;
    }

    struct ServicingData {
        address msp;
        string vehicleRegistrationNumber;
        string description;
        uint mileage;
        string damagedParts;
        string engineCondition;
        bool isVehicleWellMaintained;
        int created_at;
    }

    struct Token {
        string token;
    }

    address owner;
    bool isValidAdmin = false;
    bool isValidMSP = false;


    mapping(string => VehicleOwner) vehicleOwners;
    mapping(string => Vehicle) vehicles;
    mapping(address => MSP) membershipServiceProvider;
    mapping(string => ServicingData) servicingData;
    mapping(string => bool) isVehicleOwnerExists;
    mapping(string => bool) isVehicleIdExists;
    mapping(address => bool) isMSPExists;
    mapping(string => bool) isServicingDataExists;
    mapping(string => Token) tokens;
    mapping(string => bool) isTokenValid;

    event vehicleCreated(string id, string model, string brand, string registrationNumber, int createdAt);
    event vehicleUpdated(string id, string model, string brand, string registrationNumber, int updated_at);
    event servicingDataCreated(string id, string vehicleRegistrationNumber, string description, int created_at);

    function createVehicleOwner(
        string memory name,
        string memory nid,
        string memory presentResidency,
        string memory email,
        int created_at
    ) public payable {
        require(isValidAdmin == true, "InValid Admin");
        require(bytes(name).length > 0, "Name is required");
        require(bytes(nid).length > 0, "Nid is required");
        require(bytes(presentResidency).length > 0, "Present residency is required");
        require(bytes(email).length > 0, "Email is required");
        require(created_at > 0, "CreatedAt is invalid");
        require(isVehicleOwnerExists[id] == false, "Vehicle Owner already registered");

        isVehicleOwnerExists[id] = true;
        vehicleOwners[id] = VehicleOwner(name, nid, presentResidency, email, created_at);
    }

    function getVehicleOwnerProfile() public view returns (
        string memory name,
        string memory nid,
        string memory presentResidency,
        string memory email,
        int created_at
    ) {
        require(isValidAdmin == true, "InValid Admin");
        require(isVehicleOwnerExists[id] == true, "Vehicle Owner is not registered");

        VehicleOwner memory vehicleOwner = vehicleOwners[id];
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
        require(isValidAdmin == true, "InValid Admin");
        require(bytes(name).length > 0, "Name is required");
        require(bytes(nid).length > 0, "Nid is required");
        require(bytes(presentResidency).length > 0, "Present residency is required");
        require(bytes(email).length > 0, "Email is required");
        require(isVehicleOwnerExists[id] == true, "User isn't registered");

        vehicleOwners[id].name = name;
        vehicleOwners[id].nid = nid;
        vehicleOwners[id].presentResidency = presentResidency;
        vehicleOwners[id].email = email;
    }

    function isVehicleOwnerRegistered() public view returns (bool){
        return isVehicleOwnerExists[id];
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
        require(isValidAdmin == true, "InValid Admin");
        require(isVehicleOwnerExists[id] == true, "Vehicle owner not registered");
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
        require(isValidAdmin == true, "InValid Admin");
        require(isVehicleOwnerExists[id] == true, "Vehicle owner not registered");
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

    function createMSP(
        string mspName,
        string location,
        string email,
        string password,
        string token,
        int created_at
    ) public payable {
        require(isTokenValid[token] == true, "Token is invalid");
        require(bytes(mspName).length > 0, "MSP Name is required");
        require(bytes(location).length > 0, "Location is required");
        require(bytes(email).length > 0, "Email is required");
        require(bytes(password).length > 0, "Password is required");
        require(created_at > 0, "CreatedAt is invalid");
        require(isMSPExists[msg.sender] == false, "MSP already exists");

        isMSPExists[msg.sender] = true;
        membershipServiceProvider[msg.sender] = membershipServiceProvider(mspName, location, email, password, token, created_at, 0);
    }

    function getMSPProfile() public view returns (
        string mspName,
        string location,
        string email,
        string password,
        string token,
        int created_at,
        int updated_at
    ) {
        require(isMSPExists[msg.sender] == true, "MSP does not exists");
    }

    function updateMSP(
        string mspName,
        string location,
        string email,
        string password,
        string token,
        int updated_at
    ) public payable {
        require(tokens[token] == true, "Invalid token");
        require(bytes(mspName).length > 0, "MSP Name is required");
        require(bytes(location).length > 0, "Location is required");
        require(bytes(email).length > 0, "Email is required");
        require(bytes(password).length > 0, "Password is required");
        require(updated_at > 0, "CreatedAt is invalid");
        require(isMSPExists[msg.sender] == true, "MSP does not registered");

        isMSPExists[msg.sender] = true;
        membershipServiceProvider[msg.sender] = membershipServiceProvider(mspName, location, email, password, token, updated_at);
    }

    function createServicingData(
        string vehicleRegistrationNumber,
        string description,
        uint mileage,
        string damagedParts,
        string engineCondition,
        bool isVehicleWellMaintained,
        int created_at
    ) public payable {
        require(bytes(vehicleRegistrationNumber).length > 0, "MSP Name is required");
        require(bytes(description).length > 0, "Location is required");
        require(mileage > 0, "Mileage is required");
        require(bytes(damagedParts).length > 0, "Damaged parts is required");
        require(bytes(engineCondition), "Engine condition is required");
        require(isVehicleWellMaintained == true || isVehicleWellMaintained == false, "IsVehicleWellMaintained will be true or false");
        require(isMSPExists[msg.sender] == true, "MSP does not exist");

        MSP memory msp = membershipServiceProvider[msg.sender];
        isServicingDataExists[id] = true;

        msp[id] = MSP(msg.sender, vehicleRegistrationNumber, description, mileage, damagedParts,
            engineCondition, isVehicleWellMaintained, created_at);


        emit servicingDataCreated(id, vehicleRegistrationNumber, description, created_at);
    }

    function loginAdmin(string memory gmail, string memory password) public view returns (bool) {
        require(bytes(gmail).length > 0, "Gmail is required");
        require(bytes(password).length > 0, "Gmail is required");

        if (gmail == "brta@gmail.com" && password == "1234") {
            isValidAdmin = true;
        }
        return isValidAdmin;
    }

    function loginMSP(string memory email, string memory password) public view returns (bool) {
        require(bytes(email).length > 0, "Gmail is required");
        require(bytes(password).length > 0, "Gmail is required");
        require(membershipServiceProvider[msg.sender] == true, "Invalid MSP");

        if (membershipServiceProvider[msg.sender].email == email && membershipServiceProvider[msg.sender].password == password) {
            isValidMSP = true;
        }

        return isValidMSP;
    }

    function transfer(address newOwner) public payable {
        require(owner == msg.sender);
        owner = newOwner;
    }

    function hash(string memory _string) public pure returns(bytes32) {
        return keccak256(abi.encodePacked(_string));
    }

    function generateToken(string memory token) public payable {
        require(isTokenValid[token] == false, "Token already exits");

        tokens[id] = token;
    }
}