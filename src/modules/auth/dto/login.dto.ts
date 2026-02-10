/**
 * @openapi
 * components:
 * schemas:
 * LoginDTO:
 * type: object
 * required:
 * - email
 * - password
 * properties:
 * email:
 * type: string
 * password:
 * type: string
 */
export type LoginDto= {
  email: string;
  password: string;
};