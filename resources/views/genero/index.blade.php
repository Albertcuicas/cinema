@extends('layouts.admin')
	@section('content')
		<table class="table">
			<thead>
				<th>Nombre</th>
				<th>Acción</th>
			</thead>
			<tbody id="datos">
			</tbody>
		</table>
	@endsection

	@section('scripts')
		{!!Html::script('js/script2.js')!!}
	@endsection