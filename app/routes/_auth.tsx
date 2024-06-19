import { Box, Container, Typography } from "@mui/material";
import { Outlet } from "@remix-run/react";
import notionLogo from "../assets/images/notion-logo.png"

export default function AuthLayout() {
  return (
    <div>
      <Container component="main" maxWidth="xs" className="space-y-5">
        <Box className="mt-8 flex items-center flex-col">
          <img className="w-28 mb-" src={notionLogo} alt="notion_logo"/>
          <Typography variant="h6">
            Notionクローン開発
          </Typography>
        </Box>
        <Outlet />
      </Container>
    </div>
  )
}
