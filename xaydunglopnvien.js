var staff = /** @class */ (function () {
    function staff(name, email, age) {
        this._name = name;
        this._email = email;
        this._age = age;
    }
    Object.defineProperty(staff.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(staff.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(staff.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return staff;
}());
var nhanVien = new staff("son", "son@gmail.com", 20);
console.log(nhanVien);
