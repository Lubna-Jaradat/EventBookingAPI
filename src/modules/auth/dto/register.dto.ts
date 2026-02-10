/**
 * @openapi
 * components:
 * schemas:
 * RegisterDTO:
 * type: object
 * required:
 * - email
 * - password
 * - name
 * properties:
 * email:
 * type: string
 * format: email
 * password:
 * type: string
 * format: password
 * name:
 * type: string
 * role:
 * $ref: '#/components/schemas/Role'
 */
export type RegisterDto = {
  email: string;
  password: string;
  name: string;
};
 