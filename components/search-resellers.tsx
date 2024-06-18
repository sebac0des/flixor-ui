"use client";
import { useState, FormEvent } from "react";

// Fonts
import { small } from "@/app/fonts";

// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SimpleTitle } from "@/components/ui/simple-title";
import { toast } from "@/components/ui/use-toast";
import Wrapper from "@/components/ui/wrapper";

// Utils
import { cn } from "@/lib/utils";

// Types
import { Reseller } from "@/types";
import { Check } from "lucide-react";

interface Props {
  SearchResellersByLocation: (query: string) => Promise<Reseller[]>;
}

export default function SearchResellers({ SearchResellersByLocation }: Props) {
  const [search, setSearch] = useState("");
  const [resellers, setResellers] = useState<Reseller[]>([]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const resellers = await SearchResellersByLocation(search);

    if (resellers && resellers.length === 0)
      return toast({
        variant: "destructive",
        title: "No hay revendedores",
        description: "No se encontrar revendedores en esta zona.",
      });

    setResellers(resellers);

    toast({
      title: `Se econtraron ${resellers.length} resultados`,
      description: (
        <a className="text-xs underline" href="#results">
          Pulsa aqui para ver revendedores en {search}
        </a>
      ),
    });
  };

  return (
    <Wrapper
      className="flex flex-col justify-center items-center gap-10"
      container="stretch"
    >
      <SimpleTitle
        containerClassName="text-center"
        smallText="¿Buscas un vendedor en tu ciudad? 🚩"
        titleText="Busca si hay revendedores cerca tuyo"
      />

      {/* Resellers search form */}
      <form className="xl:w-96" onSubmit={handleSubmit}>
        <Input
          type="text"
          className="text-xs"
          placeholder="Ingresa una ciudad o provincia..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <small
          className={cn(
            small.className,
            "block text-gray-500 mt-1.5 mb-5"
          )}
        >
          Busca un revendedor por ciudad o provincia.
        </small>
        <Button disabled={!search} type="submit">
          Buscar revendedores
        </Button>
      </form>

      {/* Resellers search results */}

      <ul
        id="results"
        className="grid md:grid-cols-3 gap-5 w-full xl:w-10/12 m-auto bg-[#fbfbfb]"
      >
        {resellers &&
          resellers.map((reseller) => (
            <ResellerItem {...reseller} key={reseller.id} />
          ))}
      </ul>
    </Wrapper>
  );
}

function ResellerItem(data: Reseller) {
  return (
    <Card className="drop-shadow-md">
      <CardHeader className="flex flex-col items-center text-center">
        <Avatar className="w-20 h-20 mb-2">
          <AvatarImage src={data.image} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span
          className={cn(
            small.className,
            "font-bold text-xs border border-primary bg-secondary p-1 px-2"
          )}
        >
          {data.city}, {data.province}
        </span>
        <CardTitle className="text-lg">{data.name}</CardTitle>
        <CardDescription
          className={cn(small.className, "text-sm whitespace-pre-line")}
        >
          {data.short_desc}
        </CardDescription>
      </CardHeader>

      <ResellerContactData
        email={data.email}
        phone={data.phone}
        address={data.address}
      />
      <ResellerTags tags={data.tags} />
    </Card>
  );
}

// The reseller contact data
function ResellerContactData({
  phone,
  address,
  email,
}: {
  phone: string;
  email?: string;
  address?: string;
}) {
  return (
    <CardContent>
      <ul className="text-xs text-gray-500 flex flex-col gap-1.5">
        <li className="flex items-center gap-1">✅ Telefono:{phone}</li>
        {address && (
          <li className="flex items-center gap-1">✅ Direccion:{address}</li>
        )}
        {email && <li className="flex items-center gap-1">✅ Email:{email}</li>}
      </ul>
    </CardContent>
  );
}

// The reseller professions
function ResellerTags({ tags }: { tags?: string[] }) {
  if (tags && tags.length === 0) return null;

  if (tags && tags.length >= 1)
    return (
      <CardFooter className="flex flex-wrap gap-1 p-2 border-t border-primary/10">
        {tags.map((item, index) => (
          <div
            key={index}
            className={cn(
              small.className,
              "bg-soft rounded-full py-0.5 px-2 text-xs capitalize"
            )}
          >
            {item}
          </div>
        ))}
      </CardFooter>
    );
}
