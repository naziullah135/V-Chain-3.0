package app

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
)

var DB *gorm.DB
var err error

func DbConnection() {
	DB, err = gorm.Open(mysql.New(mysql.Config{
		DriverName: "mysql",
		DSN:        "root:password@tcp(localhost:3306)/vchain?charset=utf8&parseTime=True&loc=Local",
	}), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}
	err := DB.AutoMigrate()
	if err != nil {
		log.Fatal(err)
	}
}
