package db

import (
	"log"

	"github.com/gocql/gocql"
)

//TODO: Set up the password for Cassandra

func NewCassandraCluster(node, keyspace string) *gocql.Session {
	cluster := gocql.NewCluster(node)
	cluster.Keyspace = keyspace
	cluster.Consistency = gocql.Quorum

	session, err := cluster.CreateSession()
	if err != nil {
		log.Fatalf("Failed to connect to cassandra: %v", err)
	}
	return session
}
