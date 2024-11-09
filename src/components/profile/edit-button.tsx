"use client";

import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export function EditButton() {
    const navigate = useNavigate();
    return (
        <Button size={"sm"} onClick={() => navigate("/investor/edit")}>
            <div className="flex">
                Edit
                <ArrowUpRight className="w-5 h-5 ml-1" />
            </div>
        </Button>
    );
}
