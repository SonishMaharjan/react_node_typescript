export default {
  SERVER: {
    port: 1337,
    host: "localhost",
    saltWorkFactor: 10,
    accessTokenTtl: "1y",
    refreshTokenTtl: "1y",
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIICXAIBAAKBgQCwwk757kdTKIl9C4zn/O5ROxWeSH22gCZ/fmftiAea9fk13Q8Z
    kn2GupxEwvNy8ZDNsw9zh3TcU+OaTfze6RvddAt6chdtf8h6i194+OVrBtgzkKgF
    +W5kymraNb3DI5aWO1TR0IL7r4gLMIUv/MmjZlGpb2GAoPmU7dE7FUwG+wIDAQAB
    AoGAcSEb3Pi1a7LhNEglOgF3IkRXlMO+ugSRHz5vE+bhPzu48dF3LZ3Fe2qKQ7Qm
    jmWvkQfOltmWYMHMRWEuvBikPOozsF7kJR8tmAHsbyuoZ5ogmVKdPq+q9IMrZ538
    eM5PQXHfXvc8AqJ0Gb3LzdLaXV8sdgPkigAFe2qLzbSkDhkCQQDmZyP4lVNPccu9
    LFvQodPKLUlSLDdZjBGVapRfeQajiFZPq3rxKT7/avlTVrWh4fXUPw9fKaWCG+z3
    t8V/C2QvAkEAxGV9RPM84Ks0kRqHjejp2mkWxA4yh2NNse9IX6CUOfD+B3/bTxIA
    IDUEheCrkUorqokSCdrw5krEWOc/G1W69QJAMesQwQ/hP+ogwTi2H8qf70LGivYn
    e9A8EwpHYTQAezfTs2kstsk/6+jKYgL8UTl6oGSVOQH16O2R9s2rDW5zYwJBAK5e
    FQxEkQY/utohnbxm0El0CBxlJoOBrRePhMgyP6f5yPBLmiDnsGjn6W4bfPfvzDkK
    nZNWaY9tTkpIdYUFZokCQAfqn3owRF8paZ2cHRqxJu7a1DUsKuRIRg/opq2wnMml
    y/vk/Mt6mMzE3+6V/fIeNR+o0VzbWCJBILSX/eiDzb4=
    -----END RSA PRIVATE KEY-----  `,
  },

  DATABASE: {
    //   dbUri: "mongodb://localhost:27017/rest-api",
    dbUri:
      "mongodb+srv://nurse_manager:nurse_manager@cluster0.6w59h6g.mongodb.net/?retryWrites=true&w=majority",
    dbClient: "postgres",
    database: "nurse_management",
    dbUser: "nurse_manager",
    dbPassword: "nurse_manager",
  },

  AWS: {
    AWS_ACCESS_KEY_ID: "AKIA3KTPI3RBLBORBLPN",
    AWS_SECRET_ACCESS_KEY: "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",
    AWS_BUCKET_NAME: "nurse-management",
    AWS_REGION: "ap-northeast-1",
  },
};
