package br.com.alura.forum.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.alura.forum.controller.dto.TopicoDto;
import br.com.alura.forum.model.Topico;
import br.com.alura.forum.repository.TopicoRepository;

@RestController
@RequestMapping("/topicos")
public class TopicosController {
	
	@Autowired
	private TopicoRepository topicoRepository;
	
	
	// @RequestMapping(value="/topicos", method= RequestMethod.GET) Isso pode ir pra de baixo do RestController para melhorar a manutenção
	
	@GetMapping //Ai usa-se só o mapeamento com o verbo http
	public List<TopicoDto> lista(String nomeCurso){
		if(nomeCurso == null) {

			List<Topico> topicos = topicoRepository.findAll();
			return TopicoDto.converter(topicos);
		}
		else {
			
			List<Topico> topicos = topicoRepository.findByCursoNome(nomeCurso);
			return TopicoDto.converter(topicos);
		}
		
	
	
	}
	
	
	//TopicoDto -> Sai da api e vai pro cliente, TopicoForm -> Sai do cliente e vai pra API
	@PostMapping
	public void cadastrar(TopicoForm topico) {
		
	}
}















