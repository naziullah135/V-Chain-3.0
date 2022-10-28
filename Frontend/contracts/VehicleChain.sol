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
        address carOwner;
        string model;
        string brand;
        string carType;
        string bodyType;
        string initialRegistration;
        string engine;
        string fuel;
        uint milege;
        string drive;
        string transmission;
        string color;
        uint seats;
        string registrationNumber;
        uint price;
        string previousRegistrationNumber;
        int created_at;
        int updated_at;
    }

    address owner;

    mapping(address => VehicleOwner) vehicleOwners;
    mapping(string => Vehicle) vehicles;
    mapping(address => bool) isVehicleOwnerExists;
    mapping(string => bool) isVehicleIdExists;

    event vehicleCreated(string id, string model, string brand, string registrationNumber, int createdAt);
    event vehicleUpdated(string id, string model, string brand, string registrationNumber);

    function createVehicleOwner(
        string memory name, string memory nid, string memory presentResidency, string memory email, int created_at
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

    function getVehicleOwnerProfile() public view returns (string memory name, string memory nid, string memory presentResidency, string memory email, int created_at){
        require(isVehicleOwnerExists[msg.sender] == true, "Vehicle Owner is not registered");

        VehicleOwner memory vehicleOwner = vehicleOwners[msg.sender];
        name = vehicleOwner.name;
        nid = vehicleOwner.nid;
        presentResidency = vehicleOwner.presentResidency;
        email = vehicleOwner.email;
        created_at = vehicleOwner.created_at;
    }

    function updateVehicleOwner(string memory name, string memory nid, string memory presentResidency, string memory email) public payable {
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


}