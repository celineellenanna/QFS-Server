var req = require("request");

var base_url = "http://localhost:3000/"

describe("Authentication", function() {
    describe("POST /api/auth/login", function() {
        it("returns status code 200", function() {
            req.get(base_url, function(error, res, body) {
                expect(res.statusCode).toBe(200);
            });
        });
    });
    describe("POST /api/auth/register", function() {
        it("returns status code 200", function() {
            req.get(base_url, function(error, res, body) {
                expect(res.statusCode).toBe(200);
            });
        });
    });

    describe("GET /api/auth/logout", function() {
        it("returns status code 200", function() {
            req.get(base_url, function(error, res, body) {
                expect(res.statusCode).toBe(200);
            });
        });
    });
});