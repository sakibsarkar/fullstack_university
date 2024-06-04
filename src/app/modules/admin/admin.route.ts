import express from "express";
import { validSchema } from "../../../utils/validator";
import { AdminControllers } from "./admin.controller";
import { updateAdminValidationSchema } from "./admin.validation";

const router = express.Router();

router.get("/", AdminControllers.getAllAdmins);

router.get("/:id", AdminControllers.getSingleAdmin);

router.patch(
  "/:id",
  validSchema(updateAdminValidationSchema),
  AdminControllers.updateAdmin
);

router.delete("/:adminId", AdminControllers.deleteAdmin);

export default router;
