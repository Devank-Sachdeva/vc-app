"use client"

import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function EditButton() {
    const navigate = useNavigate();
    return (
        <ArrowUpRight
            className="w-5 h-5 ml-1"
            onClick={() => navigate("/edit")}
        />
    );
}