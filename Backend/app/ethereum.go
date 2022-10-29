package app

import (
	"github.com/ethereum/go-ethereum/ethclient"
	"v-chain/backend/config"
)

var eClient *ethclient.Client

func ConnectToEthereum() error {
	c, err := ethclient.Dial(config.Ethereum().Node)
	if err != nil {
		return err
	}

	eClient = c
	return nil
}

func Ethereum() *ethclient.Client {
	return eClient
}
