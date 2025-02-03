const {validatePassword} = require('./validacion.js');


test('Contraseña válida', () => {
    expect(validatePassword('Password123!')).toBe(true);
});

test('Contraseña demasiado corta', () => {
    expect(validatePassword('Pass1!')).toBe(false);
});

test('Contraseña sin mayúsculas', () => {
    expect(validatePassword('password123!')).toBe(false);
});

test('Contraseña sin minúsculas', () => {
    expect(validatePassword('PASSWORD123!')).toBe(false);
});

test('Contraseña sin números', () => {
    expect(validatePassword('Password!')).toBe(false);
});

test('Contraseña sin caracteres especiales', () => {
    expect(validatePassword('Password123')).toBe(false);
});

test('Contraseña vacía', () => {
    expect(validatePassword('')).toBe(false);
});
